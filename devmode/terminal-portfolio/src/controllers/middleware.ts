import express from 'express';
import { merge, get } from 'lodash';

import { getUserBySessionToken } from '../db/users'; 

//This middleware acts and make changes on the request and response objects lifecycle
//@param next: - Pass the object to the next function
export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    //Grabs the session token 
    const sessionToken = req.cookies['CAIPORAAUTH'];
    
    //Checks
    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) {
      return res.sendStatus(403);
    }
    
    //Lodash for appending the identity field to the request object 
    merge(req, { identity: existingUser });

    return next();
  } 
    catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

//This middleware checks if the user is the owner of the resource
export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    //Grabs the user id from the request object / parameter URL
    const { id } = req.params;
    //Grabs the user id from the identity object added by the isAuthenticated middleware
    const currentUserId = get(req, 'identity._id') as string;
    
    //Checks
    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  }
    catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

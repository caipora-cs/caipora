class Resizer {
  constructor(private container: HTMLElement, private camera: THREE.PerspectiveCamera, private renderer: THREE.WebGLRenderer) {
    // set initial size
    this.setSize();

    window.addEventListener('resize', this.onWindowResize);
  }

  private setSize = () => {
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);
  };

  private onWindowResize = () => {
    // set the size again if a resize occurs
    this.setSize();
    // perform any custom actions
    this.onResize();
  };

  onResize() {}

  dispose() {
    window.removeEventListener('resize', this.onWindowResize);
  }
}

export { Resizer };


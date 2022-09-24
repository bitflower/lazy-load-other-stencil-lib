import { Component, Host, h, State } from '@stencil/core';

const lazyStencilLib = 'https://cdn.jsdelivr.net/npm/@ionic/core/loader/index.es2017.js';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true,
})
export class AppProfile {
  @State()
  private externalLoaded = false;

  // --------------------------------------------------------------------------
  //
  //  Private Properties
  //
  // --------------------------------------------------------------------------

  private onButtonClicked = async () => {
    console.log(`Starting lazy load ....`);
    /* Dynamic Import */
    try {
      const myModule = await import(lazyStencilLib);
      console.log(`Got the module`, myModule);

      const { applyPolyfills, defineCustomElements } = myModule;

      // Registers the custom elements in the browser
      applyPolyfills().then(() => {
        defineCustomElements();
        this.externalLoaded = true;
      });
    } catch (error) {
      console.error(error);
    }
  };

  // --------------------------------------------------------------------------
  //
  //  Render
  //
  // --------------------------------------------------------------------------

  render() {
    return (
      <Host>
        <button onClick={this.onButtonClicked}>Load ionic lazily from CDN</button>
        {this.externalLoaded && (
          <div>
            <ion-button>I'm an ionic button</ion-button>
            <ion-list>
              <ion-item>
                <ion-label>I'm an ion list</ion-label>
              </ion-item>
            </ion-list>
          </div>
        )}
      </Host>
    );
  }
}

import { Component, Host, h, State } from '@stencil/core';
import { SomeIonicStuff } from '../SomeIonicStuff';

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
      console.log(`Applying polyfills and regiserting custom elements`, myModule);

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
            <SomeIonicStuff />
          </div>
        )}
      </Host>
    );
  }
}

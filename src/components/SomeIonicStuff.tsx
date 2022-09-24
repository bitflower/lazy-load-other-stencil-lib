import { Fragment, FunctionalComponent, h } from '@stencil/core';

export const SomeIonicStuff: FunctionalComponent<any> = () => {
  return (
    <Fragment>
      <ion-button>I'm an ionic button</ion-button>
      <ion-list>
        <ion-item>
          <ion-label>I'm an ion list</ion-label>
        </ion-item>
      </ion-list>
    </Fragment>
  );
};

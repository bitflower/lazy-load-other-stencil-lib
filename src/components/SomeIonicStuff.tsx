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
      <div>
        <ion-segment value="default">
          <ion-segment-button value="default">
            <ion-label>Segment 1</ion-label>
          </ion-segment-button>
          <ion-segment-button value="segment">
            <ion-label>Segment 2</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>
      <ion-datetime></ion-datetime>
    </Fragment>
  );
};

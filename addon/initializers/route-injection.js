import Router from '@ember/routing/router';
import { on } from '@ember/object/evented';
import { inject as service } from '@ember/service';

export function initialize() {
  Router.reopen({
    intercom: service(),

    notifyIntercom: on('didTransition', function () {
      this.get('intercom').update();
    })
  });
}

export default {
  name: 'route-injection',
  initialize: initialize
};

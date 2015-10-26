import Ember from 'ember';

export default Ember.Component.extend({
  measure: Ember.inject.service(),

  didInsertElement() {
    this.get('measure').register('inViewPort', {
      element: this.element,
      callback(element, bounding, inView) {
        console.log(`Element is ${inView ? 'in view' : 'out of view'}`);
      }
    });

    this.get('measure').register('resize', {
      callback() {
        console.log('resize');
      }
    });

    this.get('measure').register('scroll', {
      callback() {
        console.log('scroll');
      }
    });
  }
});
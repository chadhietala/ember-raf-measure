import Ember from 'ember';
import rafMeasure from 'raf-measure';

const { run: { join } } = Ember;
const flushQueues = rafMeasure.flushQueues;

rafMeasure.flushQueues = () => {
  join(rafMeasure, flushQueues);
};

rafMeasure.willDestroy = () => {
  rafMeasure.unregisterAll.call(rafMeasure);
};

export default Ember.Service.extend(rafMeasure);
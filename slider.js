(function () {
    'use strict';

    Bootstrap.BootstrapSlider = Ember.TextField.extend({

        attributeBindings: ['max', 'value'],

        updateValue: function() {
            this.$().slider({
                max: this.get('max'),
                value: this.get('value'),
                tooltip: 'hide'
            });
        }.observes('value'),

        didInsertElement: function() {
            var self = this;
            this.$().slider({
                max: this.get('max'),
                value: this.get('value'),
                tooltip: 'hide'
            });

            this.$().on('slide', function() {
                self.set('value', this.value);
            });

            this.$().on('slideStop', function() {
                self.set('value', this.value);
            });

        },

        willDestroyElement: function(){
            this.$().off('slide');
            this.$().off('slideStop');
        }

    });

})();

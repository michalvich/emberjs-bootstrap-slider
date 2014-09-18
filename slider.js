(function() {
    var BootstrapSlider;

    BootstrapSlider = window.BootstrapSlider = Ember.Namespace.create();

}).call(this);

(function() {
    var BootstrapSlider, get;

    BootstrapSlider = window.BootstrapSlider;

    get = Ember.get;

}).call(this);

(function() {

    BootstrapSlider.Slider = Ember.TextField.extend({

        attributeBindings: ['max', 'value', 'handle'],

        updateValue: function() {
            this.$().slider({
                max: this.get('max'),
                value: this.get('value'),
                handle: this.get('handle'),
                tooltip: 'hide'
            });
        }.observes('value'),

        didInsertElement: function() {
            var self = this;
            this.$().slider({
                max: this.get('max'),
                value: this.get('value'),
                handle: this.get('handle'),
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

}).call(this);

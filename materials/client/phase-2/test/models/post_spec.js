(function () {
  'use strict';

  describe('post', function() {

    describe('validation', function() {
      beforeEach(function() {
        _.extend(
          Backbone.Model.prototype,
          Backbone.Validation.mixin);

        this.model = new App.Models.Post();
        this.mockFn = function(mockLength) {
          return new Array(mockLength + 1).join('x');
        };
      });

      describe('when validating body', function() {
        it('should pass with correct data', function() {
          var mock = this.mockFn(250);
          this.model.set('body', mock);
          var state = this.model.validate();
          expect(state.body).to.eq(undefined);
        });

        it('should fail when field required', function() {
          this.model.set('body', '');
          var state = this.model.validate();
          expect(state.body).to.eq('Body is required');
        });

        it('should fail when field min length', function() {
          var mock = this.mockFn(199);
          this.model.set('body', mock);
          var state = this.model.validate();
          expect(state.body).to.eq('Body must be at least 200 characters');
        });

        it('should fail when field max length', function() {
          var mock = this.mockFn(5001);
          this.model.set('body', mock);
          var state = this.model.validate();
          expect(state.body).to.eq('Body must be at most 5000 characters');
        });
      });

      describe('when validating date', function() {
        it('should pass with correct data', function() {
          var date = moment().add(1, 'd').toDate();
          this.model.set('date', date);
          var state = this.model.validate();
          expect(state.date).to.eq(undefined);
        });

        it('should fail when field invalid', function() {
          this.model.set('date', 'x');
          var state = this.model.validate();
          expect(state.date).to.eq('Date is required');
        });

        it('should fail when field required', function() {
          this.model.set('date', null);
          var state = this.model.validate();
          expect(state.date).to.eq('Date is required');
        });

        it('should fail when field is in past', function() {
          var date = new Date();
          this.model.set('date', date);
          var state = this.model.validate();
          expect(state.date).to.eq('Date must be at future');
        });
      });

      describe('when validating title', function() {
        it('should pass with correct data', function() {
          this.model.set('title', 'post');
          var state = this.model.validate();
          expect(state.title).to.eq(undefined);
        });

        it('should fail when field required', function() {
          this.model.set('title', '');
          var state = this.model.validate();
          expect(state.title).to.eq('Title is required');
        });

        it('should fail when field max length', function() {
          var mock = this.mockFn(101);
          this.model.set('title', mock);
          var state = this.model.validate();
          expect(state.title).to.eq('Title must be at most 100 characters');
        });
      });
    });

  });

})();

import home from './home.index';

describe('Controller: Home', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('name is initialized to World', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('World');
  });
});
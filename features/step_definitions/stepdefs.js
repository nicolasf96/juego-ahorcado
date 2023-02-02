import assert  from 'assert';
import cucumber from 'cucumber'

function isItFriday(today) {
  // We'll leave the implementation blank for now
}

cucumber.Given('today is Sunday', function () {
  this.today = 'Sunday';
});

cucumber.When('I ask whether it\'s Friday yet', function () {
  this.actualAnswer = isItFriday(this.today);
});

cucumber.Then('I should be told {string}', function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});
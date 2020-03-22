module.exports = function repeater(str, options) {
      let separator = '+';
      let additionSeparator = '|';
      let addition = options.addition;
      let additionRepeatTimes = options.additionRepeatTimes;
      let repeatTimes = options.repeatTimes;
      let arr = [];

      if (typeof str !== 'string' || typeof options.addition !== 'string') {
        str.toString();
        addition.toString();
      }
      if (options.hasOwnProperty('additionSeparator')) {
        let additionSeparator = options.additionSeparator;
      }
      if (options.hasOwnProperty('separator')) {
        let separator = options.separator;
      }
      for (let i = 0; i < repeatTimes; i++) {

      }
      return arr;
};
  
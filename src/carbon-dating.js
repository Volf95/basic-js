const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const RATE_REACTION = 0.693/HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' || sampleActivity === ''){
        return false;
    }
    if (sampleActivity <= 0 || sampleActivity > 15 || sampleActivity > 9000){
        return false;
    } 
    if (!sampleActivity.match(/^\d*\.?\d*\.?\d*$/)) {
        return false;
    }
    let age = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_REACTION);
    return age;
};

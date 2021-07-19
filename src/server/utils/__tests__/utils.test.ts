const { getHashByWord } = require('../index');

describe(('Server utils'), () => {
  describe(('getHashByWord'), () => {
    it('should create hash by word', () => {
      const wordsList = ['Abba', 'bb', 'dd', 'cf'];
      const correctHashList = ['2222', '22', '33', '23'];

      wordsList.forEach((word, i) => {
        expect(getHashByWord(word)).toBe(correctHashList[i]);
      });
    });

    it('should use 1 as hash for each special symbols', () => {
      const wordsList = ['.', '!!!', '.,?<'];
      const correctHashList = ['1', '111', '1111'];

      wordsList.forEach((word, i) => {
        expect(getHashByWord(word)).toBe(correctHashList[i]);
      });
    });
  });
});

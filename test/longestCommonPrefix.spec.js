import { expect } from 'chai';
import { CommonPrefix } from '../leetCode/longestCommonPrefix/longestCommonPrefix.js';
 
describe("LongestCommonPrefix class under test", () => {
 
  let checkCommonPrefix;
 
  beforeEach(() => {
    checkCommonPrefix = new CommonPrefix();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });

  it("should return 'fl', when passed a ['flower', 'florian','flight']", () =>{
    expect(checkCommonPrefix.longestCommonPrefix(['flower', 'florian','flight'])).to.eql('fl');
  });

  it("should return 'flo', when passed a [flower', 'florian']", () =>{
    expect(checkCommonPrefix.longestCommonPrefix(['flower', 'florian'])).to.eql('flo');
  });

  it("should return '' when passed a ['banana','car']", () =>{
    expect(checkCommonPrefix.longestCommonPrefix(['banana','car'])).to.eql('');
  }); 
})

import { expect } from 'chai';
import { MergeTwoSortedList } from '../leetCode/mergeTwoSortedList/mergeTwoSortedList.js';
 
describe("MergeTwoSortedList class under test", () => {
 
  let checkMergeTwoSortedList;
 
  beforeEach(() => {
    checkMergeTwoSortedList = new MergeTwoSortedList();
  });
 
  it("should pass this test test", () =>{
    expect(true).to.eql(true)
  });

  it("should return '[]', when passed a [] and []", () =>{
    expect(checkMergeTwoSortedList.mergeTwoSortedList([],[])).to.eql([]);
  });

  it("should return '[1,1,2,2,4,5]', when passed a [1,2,2,5] and [1,2,4]", () =>{
    expect(checkMergeTwoSortedList.mergeTwoSortedList([1,2,2,5], [1,2,4])).to.eql([1,1,2,2,2,4,5]);
  });

  it("should return '[21,30,44,70,99]', when passed a [99,70,21] and [30,44]", () =>{
    expect(checkMergeTwoSortedList.mergeTwoSortedList([99,70,21],[30,44])).to.eql([21,30,44,70,99]);
  }); 
})

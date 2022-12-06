import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should be able to add 2 numbers together', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    const calculatedTotal = container.getByTestId('operator-equals');
    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(calculatedTotal);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should be able to take 2 numbers away', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const minus = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const calculatedTotal = container.getByTestId('operator-equals');
    fireEvent.click(button7);
    fireEvent.click(minus);
    fireEvent.click(button4);
    fireEvent.click(calculatedTotal);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to multiply 2 numbers together', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const calculatedTotal = container.getByTestId('operator-equals');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(calculatedTotal);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should be able to divide one number by another', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const runningTotal = container.getByTestId('running-total');
    const calculatedTotal = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(calculatedTotal);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should be able to chain operations', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const minus = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const calculatedTotal = container.getByTestId('operator-equals');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(minus);
    fireEvent.click(button1);
    fireEvent.click(calculatedTotal);
    expect(runningTotal.textContent).toEqual('2');
  })
  
  it('should be able to concatenate multiple clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    
    const runningTotal = container.getByTestId('running-total');
    
    fireEvent.click(button2);
    fireEvent.click(button1);
    
    expect(runningTotal.textContent).toEqual('21');
  })
  
  it('should be able to clear running total but keep calculation', () => {
    const button3 = container.getByTestId('number3');
    const button1 = container.getByTestId('number1');
    const calculatedTotal = container.getByTestId('operator-equals');
    
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');
    const minus = container.getByTestId('operator-subtract');
    
    fireEvent.click(button3);
    fireEvent.click(minus);
    fireEvent.click(button1);
    fireEvent.click(calculatedTotal);
    fireEvent.click(clear);
    fireEvent.click(minus);
    fireEvent.click(button1);
    fireEvent.click(calculatedTotal);
    
    expect(runningTotal.textContent).toEqual('1');
  })
})


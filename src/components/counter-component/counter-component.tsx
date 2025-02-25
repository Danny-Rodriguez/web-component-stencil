import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {

  @Prop() btntext: string;
  @Prop() color: string;

  @State() counter: number = 0;

  increase() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
  }

  render() {
    return (
      <Host>
        <div>Count: {this.counter}</div>
        <button onClick={() => this.increase()}>{this.btntext || 'Increment'}</button>
        <button onClick={() => this.reset()}>Reset</button>
      </Host>
    );
  }
}

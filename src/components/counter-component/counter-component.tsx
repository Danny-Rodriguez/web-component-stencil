import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'counter-component',
  styleUrl: 'counter-component.css',
  shadow: true,
})
export class CounterComponent {

  @Prop() btntext: string;
  @Prop() color: string;

  @State() counter: number = 0;

  @Event() didReset: EventEmitter<boolean>;

  increase() {
    this.counter++;
  }

  reset() {
    this.counter = 0;
    this.didReset.emit(true);
  }

  render() {
    return (
      <Host>
        <div class={`counter ${this.color}`} >{this.counter}</div>
        <button onClick={() => this.increase()}>{this.btntext || 'Increment'}</button>
        <button onClick={() => this.reset()}>Reset</button>
        <slot name="help"></slot>
      </Host>
    );
  }
}

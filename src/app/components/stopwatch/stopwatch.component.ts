import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.css'
})
export class StopwatchComponent {
  private timer: any;
  private elapsedTime: number = 0;
  displayTime: string = '00:00:00';

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.elapsedTime += 1000;
        this.updateDisplayTime();
        console.log("Time Start!")
      }, 1000);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      console.log("Time Stopped!")
    }
  }

  reset() {
    this.stop();
    this.elapsedTime = 0;
    this.updateDisplayTime();
    console.log("Time Reset!")
  }

  private updateDisplayTime() {
    const hours = Math.floor(this.elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((this.elapsedTime % (1000 * 60)) / 1000);

    this.displayTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}

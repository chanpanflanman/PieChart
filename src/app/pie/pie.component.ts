import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-pie',
    templateUrl: './pie.component.html',
    styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit, OnChanges {
    
    array: string[] = ['Shirts', 'Pants', 'Shoes'];
    @Input() dataNumbers: number[] = [];
    @Input() requestedPieChart: boolean = false;
    data: any;
    options: any;


    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.requestedPieChart) {
            this.func();
        }
    }

    func() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        this.data = {
            labels: this.array,
            datasets: [
                {
                    data: this.dataNumbers,
                    backgroundColor: [documentStyle.getPropertyValue('--cyan-400'), documentStyle.getPropertyValue('--red-400'), documentStyle.getPropertyValue('--blue-400')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--cyan-500'), documentStyle.getPropertyValue('--red-500'), documentStyle.getPropertyValue('--blue-500')]
                }
            ]
        };

        this.options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        color: textColor
                    }
                },
                tooltip: {
                    // backgroundColor: function (context: any) {
                    // const labelName = context.tooltip.title;
                    // debugger
                    // if (labelName == 'Shirts') {
                    //     return '#55aba8';
                    // } else if (labelName == 'Pants') {
                    //     return '#ab5555';
                    // } else if (labelName == 'Shoes') {
                    //     return '#5575ab';
                    // } else {
                    //     return '#000';
                    // }
                }
            }
        }
    };
}



import { Injectable } from '@angular/core';
import { job } from './job.model';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  jobsList: job[] = [
    {
      title: 'Directed Electronics. Freelance',
      startDate: new Date(2020, 6, 16),
      endDate: new Date(2021, 5, 1),
      tasks: [
        'Creation and maintaining of internal procedures to consult enterprise information about sales, cusomers, products and employees',
        'Creating rest service to fetch info about status as gasoline usage, driving time, vehicle and driver information',
        'General maintance to enterprise web site throught the use of cPanel features',
      ],
    },
    {
      title: 'Ironbit Apps.',
      startDate: new Date(2022, 7, 1),
      endDate: new Date(2023, 1, 1),
      tasks: [
        'Developed and maintaned the new solution for digital ingest of customer documents through the creation of new Rest services ton ingest and consult information about customer documents',
        'Manipulation of different subrutines in JAVA 8 to enhance performance and apply new bussiness rules',
        'Maintance an reingeniring of the customer registration module changing bussiness logic and Look and Feel',
      ],
    },
    {
      title: 'To be added',
      startDate: new Date(2022, 7, 1),
      endDate: new Date(2023, 1, 1),
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat risus non scelerisque convallis. In euismod urna in pretium posuere. Aenean ut arcu fringilla, condimentum ante nec, tincidunt sapien. Mauris commodo varius turpis',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat risus non scelerisque convallis. In euismod urna in pretium posuere. Aenean ut arcu fringilla, condimentum ante nec, tincidunt sapien. Mauris commodo varius turpis',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat risus non scelerisque convallis. In euismod urna in pretium posuere. Aenean ut arcu fringilla, condimentum ante nec, tincidunt sapien. Mauris commodo varius turpis',
      ],
    },
    {
      title: 'To be added',
      startDate: new Date(2022, 7, 1),
      endDate: new Date(2023, 1, 1),
      tasks: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat risus non scelerisque convallis. In euismod urna in pretium posuere. Aenean ut arcu fringilla, condimentum ante nec, tincidunt sapien. Mauris commodo varius turpis',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat risus non scelerisque convallis. In euismod urna in pretium posuere. Aenean ut arcu fringilla, condimentum ante nec, tincidunt sapien. Mauris commodo varius turpis',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat risus non scelerisque convallis. In euismod urna in pretium posuere. Aenean ut arcu fringilla, condimentum ante nec, tincidunt sapien. Mauris commodo varius turpis',
      ],
    }
  ];

  constructor() {}

  getJobs(): job[] {
    return this.jobsList;
  }

  getFirstJob(): job {
    return this.jobsList[0];
  }

  getLastJob(): job {
    return this.jobsList[this.jobsList.length - 1];
  }

}

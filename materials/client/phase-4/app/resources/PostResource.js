import Reqwest from 'reqwest';

export default {
  fetch() {
    return new Promise((resolve) => {
      resolve([
        { id: 101, title: 'Google Chairman', body: '21 points 4 hours ago | discuss' },
        { id: 102, title: 'Warming up to Go', body: '50 points 2 hours ago | discuss' },
        { id: 103, title: 'Legendary Productivity', body: '17 points 8 hours ago | discuss' },
        { id: 104, title: 'Dependency Injection in C++', body: '180 points 1 hours ago | discuss' },
        { id: 105, title: 'Netmap - the fast packet I/O framework', body: '1 points 3 hours ago | discuss' },
        { id: 106, title: 'Fear Of Modern Programming', body: '1001 points 40 hours ago | discuss' },
        { id: 107, title: 'Using Variadic Templates', body: '70 points 4 hours ago | discuss' },
        { id: 108, title: 'Time series databases', body: '35 points 5 hours ago | discuss' },
        { id: 109, title: 'Intelligent machines', body: '65 points 9 hours ago | discuss' },
        { id: 110, title: 'React 0.13 changes', body: '86 points 7 hours ago | discuss' }
      ]);
    });
  }
};

export const env = {
  type: 'dev', //prod staging dev
  appUrls: {
    dev: {
      //apiUrl: 'https://dorkar.aqualeafitsol.com',
      apiUrl: 'https://service.dorkar.in',
    },
    staging: {
      apiUrl: 'https://dorkar.aqualeafitsol.com',
    },
    prod: {
      apiUrl: 'https://dorkar.aqualeafitsol.com',
    },
  },
  mediaUrls: {
    dev: {
      //apiUrl: 'https://dorkar.aqualeafitsol.com/storage/app/public',
      apiUrl: 'https://service.dorkar.in/storage/app/public',
    },
    staging: {
      apiUrl: 'https://dorkar.aqualeafitsol.com/storage/app/public',
    },
    prod: {
      apiUrl: 'https://dorkar.aqualeafitsol.com/storage/app/public',
    },
  },
};
//https://dorkarmall.aqualeafitsol.com
export const envStore = {
  type: 'dev', //prod staging dev
  appUrls: {
    dev: {
      apiUrl: 'https://admin.dorkarmall.in',
    },
    staging: {
      apiUrl: 'https://admin.dorkarmall.in',
    },
    prod: {
      apiUrl: 'https://admin.dorkarmall.in',
    },
  },
  mediaUrls: {
    dev: {
      apiUrl: 'https://admin.dorkarmall.in/storage/app/public',
    },
    staging: {
      apiUrl: 'https://admin.dorkarmall.in/storage/app/public',
    },
    prod: {
      apiUrl: 'https://admin.dorkarmall.in/storage/app/public',
    },
  },
};

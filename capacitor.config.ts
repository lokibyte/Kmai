import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.qualifyde.kamai',
  appName: 'KAMAi',
  webDir: 'www',
  server: {
    androidScheme: 'http',
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;

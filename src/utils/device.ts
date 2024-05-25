'use server';

// NOTE - https://stackademic.com/blog/the-best-way-to-detect-mobile-device-in-next-js-14

import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

/**
 * Retrieves the user agent string from the headers.
 * @returns A promise that resolves to the user agent string.
 * @throws An error if the code is executed outside of a server environment.
 */
export const getUserAgent = async () => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server')
  }

  const { get } = headers()

  return get('user-agent');
}

/**
 * Retrieves the device information based on the user agent.
 * @returns A Promise that resolves to the device information.
 */
export const getDevice = async () => {
  const ua = await getUserAgent();

  return new UAParser(ua || '').getDevice();
}

/**
 * Retrieves the browser information using the user agent.
 * @returns A promise that resolves to the browser information.
 */
export const getBrowser = async () => {
  const ua = await getUserAgent();

  return new UAParser(ua || '').getBrowser();
}

/**
 * Retrieves the operating system (OS) information based on the user agent.
 * @returns A promise that resolves to the OS information.
 */
export const getOS = async () => {
  const ua = await getUserAgent();

  return new UAParser(ua || '').getOS();
}

/**
 * Retrieves the engine information from the user agent.
 * @returns A promise that resolves to the engine information.
 */
export const getEngine = async () => {
  const ua = await getUserAgent();

  return new UAParser(ua || '').getEngine();
}

/**
 * Retrieves the CPU information from the user agent.
 * @returns The CPU information.
 */
export const getCPU = async () => {
  const ua = await getUserAgent();

  return new UAParser(ua || '').getCPU();
}

/**
 * Checks if the current device is a mobile device.
 * @returns A promise that resolves to a boolean indicating whether the device is a mobile device.
 */
export const isMobileDevice = async () => {
  const ua = await getUserAgent();

  const device = new UAParser(ua || '').getDevice()

  return device.type === 'mobile';
}
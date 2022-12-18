/**
 * Copyright 2017 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// deno-lint-ignore-file
export * from "./common/NetworkConditions.js";
export * from "./common/QueryHandler.js";
export * from "./common/DeviceDescriptors.js";
export * from "./common/Errors.js";
declare const puppeteer: import("./types.js").PuppeteerNode;
export declare const connect: (
    options: import("./types.js").ConnectOptions,
  ) => Promise<import("./types.js").Browser>,
  createBrowserFetcher: (
    options: import("./types.js").BrowserFetcherOptions,
  ) => import("./types.js").BrowserFetcher,
  defaultArgs: (
    options?: import("./types.js").BrowserLaunchArgumentOptions,
  ) => string[],
  executablePath: (channel?: string | undefined) => string,
  launch: (
    options?: import("./types.js").PuppeteerLaunchOptions,
  ) => Promise<import("./types.js").Browser>;
export default puppeteer;

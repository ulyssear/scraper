/**
 * Copyright 2022 Google Inc. All rights reserved.
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

import Protocol from "../../vendor/devtools-protocol/types/protocol.d.ts";
import { CDPSession } from "./Connection.js";
import { EventEmitter } from "./EventEmitter.js";
import { Target } from "./Target.js";
/**
 * @internal
 */
export declare type TargetFactory = (
  targetInfo: Protocol.Target.TargetInfo,
  session?: CDPSession,
) => Target;
/**
 * @internal
 */
export declare type TargetInterceptor = (
  createdTarget: Target,
  parentTarget: Target | null,
) => Promise<void>;
/**
 * TargetManager encapsulates all interactions with CDP targets and is
 * responsible for coordinating the configuration of targets with the rest of
 * Puppeteer. Code outside of this class should not subscribe `Target.*` events
 * and only use the TargetManager events.
 *
 * There are two implementations: one for Chrome that uses CDP's auto-attach
 * mechanism and one for Firefox because Firefox does not support auto-attach.
 *
 * @internal
 */
export interface TargetManager extends EventEmitter {
  getAvailableTargets(): Map<string, Target>;
  initialize(): Promise<void>;
  dispose(): void;
  addTargetInterceptor(
    session: CDPSession,
    interceptor: TargetInterceptor,
  ): void;
  removeTargetInterceptor(
    session: CDPSession,
    interceptor: TargetInterceptor,
  ): void;
}
/**
 * @internal
 */
export declare const enum TargetManagerEmittedEvents {
  TargetDiscovered = "targetDiscovered",
  TargetAvailable = "targetAvailable",
  TargetGone = "targetGone",
  TargetChanged = "targetChanged",
}

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {NuclideUri} from '../../../commons-node/nuclideUri';
import type {
  SetDeviceTypesAction,
  SetDeviceTypeAction,
  SetDevicesAction,
  SetDeviceActionsAction,
  SetDeviceAction,
  SetHostsAction,
  SetHostAction,
  SetInfoTablesAction,
  SetProcessTableAction,
  Device,
  DeviceAction,
  Process,
} from '../types';

export const SET_DEVICE_TYPES = 'SET_DEVICE_TYPES';
export const SET_DEVICE_TYPE = 'SET_DEVICE_TYPE';
export const SET_DEVICES = 'SET_DEVICES';
export const SET_DEVICE = 'SET_DEVICE';
export const SET_DEVICE_ACTIONS = 'SET_DEVICE_ACTIONS';
export const SET_HOSTS = 'SET_HOSTS';
export const SET_HOST = 'SET_HOST';
export const SET_INFO_TABLES = 'SET_INFO_TABLES';
export const SET_PROCESS_TABLE = 'SET_PROCESS_TABLE';

export function setInfoTables(
  infoTables: Map<string, Map<string, string>>,
): SetInfoTablesAction {
  return {
    type: SET_INFO_TABLES,
    payload: {infoTables},
  };
}

export function setProcessTable(
  processTable: Array<Process>,
): SetProcessTableAction {
  return {
    type: SET_PROCESS_TABLE,
    payload: {processTable},
  };
}

export function setDevices(devices: Device[]): SetDevicesAction {
  return {
    type: SET_DEVICES,
    payload: {devices},
  };
}

export function setHosts(hosts: NuclideUri[]): SetHostsAction {
  return {
    type: SET_HOSTS,
    payload: {hosts},
  };
}

export function setHost(host: NuclideUri): SetHostAction {
  return {
    type: SET_HOST,
    payload: {host},
  };
}

export function setDeviceType(deviceType: ?string): SetDeviceTypeAction {
  return {
    type: SET_DEVICE_TYPE,
    payload: {deviceType},
  };
}

export function setDeviceTypes(deviceTypes: string[]): SetDeviceTypesAction {
  return {
    type: SET_DEVICE_TYPES,
    payload: {deviceTypes},
  };
}

export function setDevice(device: ?Device): SetDeviceAction {
  return {
    type: SET_DEVICE,
    payload: {device},
  };
}

export function setDeviceActions(
  deviceActions: DeviceAction[],
): SetDeviceActionsAction {
  return {
    type: SET_DEVICE_ACTIONS,
    payload: {deviceActions},
  };
}

export type ClimateType =
  | 'Marine Westcoast Climate'
  | 'Mediterranean Climate'
  | 'Humid Continental Climate'
  | 'Humid Subtropical Climate'
  | 'Semiarid Steppe Climate'
  | 'Highland Climate'
  | 'Midlatitude Desert Climate';

export type ClimateTypeTranslation =
  | '温带海洋性气候'
  | '地中海气候'
  | '湿润大陆性气候'
  | '亚热带湿润气候'
  | '半干旱草原气候'
  | '高原山地气候'
  | '中纬度沙漠气候';

export interface USState {
  name: string;
  abbreviation: string;
  translation: string;
  climate_type: ClimateType;
  climate_type_translation: ClimateTypeTranslation;
}

export interface USStates {
  [name: string]: USState | undefined;
}

export const US_STATES: USStates;

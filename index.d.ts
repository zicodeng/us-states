export enum ClimateType {
  MarineWestcoastClimate = 'Marine Westcoast Climate',
  MediterraneanClimate = 'Mediterranean Climate',
  HumidContinentalClimate = 'Humid Continental Climate',
  HumidSubtropicalClimate = 'Humid Subtropical Climate',
  SemiaridSteppeClimate = 'Semiarid Steppe Climate',
  HighlandClimate = 'Highland Climate',
  MidlatitudeDesertClimate = 'Midlatitude Desert Climate',
}

export enum ClimateTypeTranslation {
  MarineWestcoastClimate = '温带海洋性气候',
  MediterraneanClimate = '地中海气候',
  HumidContinentalClimate = '湿润大陆性气候',
  HumidSubtropicalClimate = '亚热带湿润气候',
  SemiaridSteppeClimate = '半干旱草原气候',
  HighlandClimate = '高原山地气候',
  MidlatitudeDesertClimate = '中纬度沙漠气候',
}

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

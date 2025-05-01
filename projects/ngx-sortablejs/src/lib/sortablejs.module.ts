import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import {GLOBALS} from './globals';
import {SortablejsDirective} from './sortablejs.directive';
import {Options} from 'sortablejs';

@NgModule({
  declarations: [SortablejsDirective],
  exports: [SortablejsDirective],
})
export class SortablejsModule {

  public static forRoot(globalOptions: Options): ModuleWithProviders<SortablejsModule> {
    return {
      ngModule: SortablejsModule,
      providers: [
        {provide: GLOBALS, useValue: globalOptions},
      ],
    };
  }

  public static forChild(globalOptions: Options): Provider {
    return {
      provide: SortablejsModule,
      useFactory: () => SortablejsModule.forRoot(globalOptions),
    };
  }

}

import { ApplicationConfig, inject } from '@angular/core';
import { Router, provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions({
        onViewTransitionCreated: ({ transition }) => {
          const router = inject(Router);
          const targetUrl = router.getCurrentNavigation()!.finalUrl!;
          
          if (
            router.isActive(targetUrl, {
              paths: 'exact',
              fragment: 'ignored',
              queryParams: 'ignored',
              matrixParams: 'ignored',
            })
          ) {
            transition.skipTransition();
          }
        },
      })
    ),
    provideAnimations(),
  ],
};

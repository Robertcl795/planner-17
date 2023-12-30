import { Component, inject } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { AsyncPipe } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: "app-sidebar",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    AsyncPipe,
    RouterModule,
  ],
  template: /*html*/ `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav
        #drawer
        class="sidenav"
        fixedInViewport
        [attr.role]="(isHandset$ | async) ? 'dialog' : 'navigation'"
        [mode]="(isHandset$ | async) ? 'over' : 'side'"
        [opened]="(isHandset$ | async) === false"
      >
        <mat-toolbar>Menu</mat-toolbar>
        <mat-nav-list>
          @for (nav of navItems; track nav) {
          <a
            mat-list-item
            [routerLink]="nav.route"
            [activated]="rla.isActive"
            routerLinkActive
            ariaCurrentWhenActive="page"
            #rla="routerLinkActive"
          >
            <mat-icon>{{ nav.icon }}</mat-icon>
            {{ nav.text }}
          </a>
          }
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          @if (isHandset$ | async) {
          <button
            type="button"
            aria-label="Toggle sidenav"
            mat-icon-button
            (click)="drawer.toggle()"
          >
            <mat-icon aria-label="Side nav toggle icon">menu</mat-icon>
          </button>
          }
          <span>TO-DONE</span>
        </mat-toolbar>
        <ng-content></ng-content>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: /*css*/ `
  @use '@angular/material' as mat;
  .sidenav-container {
      height: 100%;
    }

    .sidenav {
      width: 200px;
    }

    .sidenav .mat-toolbar {
      background: inherit;
    }

    .mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 1;
    }
    .mdc-list-item--activated {
      background-color: #E0E0E0;
    }
  `,
})
export class SidebarComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  navItems = [
    { route: "/dashboard", text: "Dashboard", icon: "dashboard" },
    {
      route: "/collections",
      text: "Collections",
      icon: "collections_bookmark",
    },
  ];
}

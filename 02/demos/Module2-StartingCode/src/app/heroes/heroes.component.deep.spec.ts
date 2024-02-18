import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { Directive, Input, NO_ERRORS_SCHEMA } from "@angular/core";

@Directive({
  selector: '[routerLink]',
  host: { '(click)': 'onClick()' },
})
export class RouterLinkDirectiveStub {
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

describe('HeroesComponent (deep tests)', () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let mockHeroService;
  let HEROES;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: 'SpiderDude', strength: 8 },
      { id: 2, name: 'Wonderful Woman', strength: 24 },
      { id: 3, name: 'SuperDude', strength: 55 },
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
    TestBed.configureTestingModule({
      declarations: [
        HeroesComponent,
        HeroComponent,
        RouterLinkDirectiveStub,
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
      ],
      // schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeroesComponent);
  });

  it('should render each hero as a HeroComponent', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    // run ngOnInit
    fixture.detectChanges();

    // vai ser retornado debugElements de HeroComponent
    const heroComponentsDEs = fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponentsDEs.length)
      .toEqual(3);

    // expect(heroComponentsDEs[0].componentInstance.hero.name)
    //   .toEqual('SpiderDude');
    // expect(heroComponentsDEs[1].componentInstance.hero.name)
    //   .toEqual('Wonderful Woman');
    // expect(heroComponentsDEs[2].componentInstance.hero.name)
    //   .toEqual('SuperDude');

    heroComponentsDEs.map((value, i) => {
      expect(value.componentInstance.hero)
        .toEqual(HEROES[i]);
    });
  });

  // Triggering Events on Elements
  it(`should call heroService.deleteHero when the Hero Component's
    delete button is clicked`, () => {
    spyOn(fixture.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
    heroComponents[0].query(By.css('button'))
      .triggerEventHandler('click', { stopPropagation: () => { } })

    expect(fixture.componentInstance.delete)
      .toHaveBeenCalledWith(HEROES[0]);
  });

  // Emitting Events from Children
  it(`should call heroService.deleteHero when the Hero Component's
    delete button is clicked Emitting Events from Children`, () => {
    spyOn(fixture.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
    (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);

    expect(fixture.componentInstance.delete)
      .toHaveBeenCalledWith(HEROES[0]);
  });

  // Raising Events on Child Directives
  it(`should call heroService.deleteHero when the Hero Component's
    delete button is clicked Raising Events on Child Directives`, () => {
    spyOn(fixture.componentInstance, 'delete');
    mockHeroService.getHeroes.and.returnValue(of(HEROES));

    fixture.detectChanges();

    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
    // (<HeroComponent>heroComponents[0].componentInstance).delete.emit(undefined);
    heroComponents[0]
      .triggerEventHandler('delete', null);

    expect(fixture.componentInstance.delete)
      .toHaveBeenCalledWith(HEROES[0]);
  });

  it('should add a new hero to the hero list when the add button is clicked', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    const name = 'Mr. Ice';
    mockHeroService.addHero.and.returnValue(of({ id: 5, name, strength: 4 }));
    const inputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    const addButton = fixture.debugElement.queryAll(By.css('button'))[0];

    inputElement.value = name;
    addButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const heroText = fixture.debugElement.query(By.css('ul')).nativeElement.textContent;
    expect(heroText)
      .toContain(name);
  });

  it('should have the correct route for the first hero', () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    const heroComponents = fixture.debugElement.queryAll(By.directive(HeroComponent));
    let routerLink = heroComponents[0]
      .query(By.directive(RouterLinkDirectiveStub))
      .injector.get(RouterLinkDirectiveStub);

    heroComponents[0].query(By.css('a')).triggerEventHandler('click', null);

    expect(routerLink.navigatedTo)
      .toBe('/detail/1');
  });
});

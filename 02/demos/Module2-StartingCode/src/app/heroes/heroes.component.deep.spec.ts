import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

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
      ],
      providers: [
        { provide: HeroService, useValue: mockHeroService },
      ],
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
});

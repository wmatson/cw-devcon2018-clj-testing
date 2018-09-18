(ns reveal.data-driven-tests)

(defn detab [s]
  (clojure.string/replace s #"\n    " "\n"))

(def class-declaration "//imports and packaging
@RunWith(Parameterized.class)
public class FancyTest {")

(def parameterization
  "    @Parameterized.Parameters(name = 
     \"Battle with {0} sheep, {1} wolves, expected winner: {2}\")
    public static Iterable<Object[]> data() {
        return Arrays.asList(new Object[][] {
            {10, 1, AnimalType.WOLF},
            {100, 1, AnimalType.WOLF},
            {1, 0, AnimalType.SHEEP},
            {0, 1, AnimalType.WOLF},
  //Test elsewhere, not simple with this way of running tests
  //            {0, 0, EXCEPTION},
            {9001, 1, AnimalType.SHEEP},
            //luckily, trailing commas are allowed
        }
    }
")

(def vars-and-ctor "
    private final int numSheep;
    private final int numWolves;
    private final AnimalType expectedWinnerType;

    public FancyTest(int numSheep int numWolves, AnimalType expectedWinnerType) {
        this.numSheep = numSheep;
        this.numWolves = numWolves;
        this.expectedWinner = expectedWinnerType;
    }
")

(def actual-test "
    public void testBattleResults() {
        List<Animal> sheep = new ArrayList<>();
        for(int i = 0; i < numSheep; i++) {
            sheep.add(Animal.ofType(AnimalType.SHEEP));
        }

        List<Animal> wolves = new ArrayList<>();
        for(int i = 0; i < numWolves; i++) {
            wolves.add(Animal.ofType(AnimalType.WOLF));
        }

        List<Animal> battleRoyale = new ArrayList<>();
        battleRoyale.addAll(sheep);
        battleRoyale.addAll(wolves);
        
        Animal winner = battleManager.fight(battleRoyale);

        assertEquals(expectedWinnerType, winner.getType());
    }
")

(def all-together
  [:pre.stretch {:style "font-size: 9.6px"}
   [:code.java 
    (str class-declaration "
    private BattleManager battleManager;

"
         parameterization
         vars-and-ctor "
    @Before
    public void setUp() {
        battleManager = new BattleManager(mock(SomeService.class));
    }
"
         actual-test "
}")]])

(def data-driven-tests-slides
  [:section
   [:h5 "Data-Driven Tests"]
   [:section
    [:h3 "JUnit (Parameterized Tests)"]
    [:mini "Heavy inspiration from " [:a {:href "https://automationrhapsody.com/data-driven-testing-junit-parameterized-tests/"} "https://automationrhapsody.com/data-driven-testing-junit-parameterized-tests/"]]]
   [:section
    [:p "Parameterization"]
    [:pre [:code.java parameterization]]]
   [:section
    [:p "Fancy Runner class"]
    [:pre [:code.java class-declaration]]
    [:pre {:style "width: 52vw"}
     [:code.java (str "//..." (detab vars-and-ctor))]]]
   [:section
    [:p "Actual Test Code"]
    [:pre.stretch [:code.java (clojure.string/trim (detab actual-test))]]]
   [:section all-together]
   [:section
    [:p "clojure.test"]
    [:pre [:code "(require '[clojure.test :refer [deftest is are]])
(require '[battle.namespace :as sut])

(deftest test-battle-results
  (are [num-sheep num-wolves expected-winner-type]
      (let [sheep (repeat num-sheep {:animal/type :sheep})
            wolves (repeat num-wolves {:animal/type :wolf})
            battle-royale (concat sheep wolves)]
        (= expected-winner-type (sut/fight battle-royale)))
    10   1 :wolf
    100  1 :wolf
    1    0 :sheep
    0    1 :wolf
    9001 1 :sheep))"]]
    [:pre.fragment [:code "(deftest empty-battle-throws-exception
  (is (thrown? Exception (sut/fight []))))"]]]])

    

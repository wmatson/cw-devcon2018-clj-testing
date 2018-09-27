(ns reveal.data-driven-tests)

(defn detab [s]
  (clojure.string/trim (clojure.string/replace s #"\n    " "\n")))

(def clojure-are-example
  [:section
   [:p "clojure.test"]
   [:pre [:code "(require '[com.example.battle :as sut])

(deftest test-battle-results
  (are [num-sheep num-wolves expected-winner-type]
      (let [sheep (repeat num-sheep {:animal/type :sheep})
            wolves (repeat num-wolves {:animal/type :wolf})
            battle-royale (concat sheep wolves)
            winner (sut/fight battle-royale)]
        (= expected-winner-type (:animal/type winner)))
    10   1 :wolf
    100  1 :wolf
    1    0 :sheep
    0    1 :wolf
    9001 1 :sheep))"]]
   [:pre [:code "(deftest empty-battle-throws-exception
  (is (thrown? Exception (sut/fight []))))"]]])

(def class-declaration "//imports and packaging
@RunWith(Parameterized.class)
public class FancyTest {")

(def parameterization  "
    @Parameterized.Parameters(name = 
     \"Battle with {0} sheep, {1} wolves, expected winner: {2}\")
    public static Iterable&lt;Object[]&gt; data() {
        return Arrays.asList(new Object[][] {
            {10, 1, AnimalType.WOLF},
            {100, 1, AnimalType.WOLF},
            {1, 0, AnimalType.SHEEP},
            {0, 1, AnimalType.WOLF},
            {9001, 1, AnimalType.SHEEP},
            //luckily, trailing commas are allowed
        }
    }
")

(def vars-and-ctor "
    private final int numSheep;
    private final int numWolves;
    private final AnimalType expectedWinnerType;

    public FancyTest(int numSheep, int numWolves, AnimalType expectedWinnerType) {
        this.numSheep = numSheep;
        this.numWolves = numWolves;
        this.expectedWinner = expectedWinnerType;
    }
")

(def mocking "
    @Before
    public void setUp() {
        SomeService mocked = mock(SomeService.class);
        List&lt;BattlefieldCondition&gt; conditions = new ArrayList<>();
        conditions.add(BattlefieldCondition.DAY);
        when(mocked.getBattlefieldConditions()).thenReturn(conditions);
        when(mocked.getDistance(any(Location.class),
                                any(Location.class)))
            .thenReturn(100);
        battleManager = new BattleManager(mocked);
    }
")

(def actual-test "
    public void testBattleResults() {
        List&lt;Animal> sheep = new ArrayList<>();
        for(int i = 0; i < numSheep; i++) {
            sheep.add(Animal.ofType(AnimalType.SHEEP));
        }
  
        List&lt;Animal> wolves = new ArrayList<>();
        for(int i = 0; i < numWolves; i++) {
            wolves.add(Animal.ofType(AnimalType.WOLF));
        }
  
        List&lt;Animal> battleRoyale = new ArrayList<>();
        battleRoyale.addAll(sheep);
        battleRoyale.addAll(wolves);
        
        Animal winner = battleManager.fight(battleRoyale);

        assertEquals(expectedWinnerType, winner.getType());
    }
")

(def all-together
  [:pre.stretch {:style "font-size: 8.4px"}
   [:code.java 
    (str class-declaration "
    private BattleManager battleManager;
"
         parameterization
         vars-and-ctor
         mocking
         actual-test "
}")]])

(def clj-mock "
(def mocked-service 
  (reify SomeService
    (getBattleFieldConditions [this] [BattlefieldCondition/DAY])
    (getDistance [this _ _] 100)))")

(def clj-all-together
  (str "(import '[com.example.battle BattleManager SomeService AnimalType Animal])
  "
       clj-mock
       "

(def battle-manager (BattleManager. mocked-service))

(defn animal-list [n animal-type]
  (repeatedly n #(Animal/ofType animal-type)))

(deftest test-battle-results
  (are [num-sheep num-wolves expected-winner-type]
      (let [sheep (animal-list num-sheep AnimalType/SHEEP)
            wolves (animal-list num-wolves AnimalType/WOLF)
            battle-royale (concat sheep wolves)
            winner (.fight battle-manager battle-royale)]
        (= expected-winner-type (.getType winner)))
    10   1 AnimalType/WOLF
    100  1 AnimalType/WOLF
    1    0 AnimalType/SHEEP
    0    1 AnimalType/WOLF
    9001 1 AnimalType/SHEEP))"))

(def data-driven-tests-slides
  [:section
   [:h5 "Data-Driven Tests"]
   clojure-are-example
   [:section
    [:h3 "JUnit (Parameterized Tests)"]
    [:mini "Heavy inspiration from " [:a {:href "https://automationrhapsody.com/data-driven-testing-junit-parameterized-tests/"} "https://automationrhapsody.com/data-driven-testing-junit-parameterized-tests/"]]]
   [:section
    [:p "Parameterization"]
    [:pre [:code.java (detab parameterization)]]]
   [:section
    [:p "Fancy Runner class"]
    [:pre [:code.java class-declaration]]
    [:pre {:style "width: 1003px"}
     [:code.java (detab vars-and-ctor)]]]
   [:section
    [:p "Mock a little"
     [:pre {:style "width: 1003px"}
      [:code.java (detab mocking)]]]]
   [:section
    [:p "Actual Test Code"]
    [:pre.stretch [:code.java (detab actual-test)]]]
   [:section all-together]
   [:section
    [:p "clojure.test + interop"]
    [:aside.notes "there are mock libraries that can do the reify line"]
    [:aside.notes "sequences can be used as java.util.Lists"]
    [:pre.stretch {:style "font-size: 18px"}
     [:code clj-all-together]]]])

(ns reveal.slides
  (:require [reveal.data-driven-tests :refer [data-driven-tests-slides]]
            [reveal.interop.setup :refer [interop-slides]]
            [reveal.interop.usage :refer [interop-usage-slides]]
            [reveal.generative-testing :refer [gen-test-slides]]
            [reveal.libs :refer [libs-slides]]))

(def intro
  [:section
   [:section
    [:h1 "Test Automation in Clojure"]
    [:h5 "Wesley Matson"]
    [:p "Clearwater Developer Conference 2018"]]
   [:section
    [:h2 "About Me"]
    [:ul
     [:li "Started Young"]
     [:li "Polyglot"]
     [:li "Other Interests"]]]])

(def agenda
  [:section
   [:h2 "Agenda"]
   [:section
    [:ul
     [:li "Rambling about Clojure"]
     [:li "Unit Testing"]
     [:li "Testing Java"]
     [:li "Interesting Libraries"]]]])

(def rambling
  [:section
   [:h5 "Rambling"]
   [:section
    [:h3 "Data Driven"]]
   [:section
    [:h3 "Default Immutable"]]
   [:section
    [:h3 "REPL"]]])

(def unit-test-intro
  [:section [:h5 "Unit Testing"]
   [:section
    [:h3 [:a {:href "https://clojure.github.io/clojure/clojure.test-api.html"} "clojure.test"]]
    [:pre [:code.clojure "(require '[clojure.test :refer [deftest is testing]])"]]]])

(def simple-tests
  [:section
   [:span "clojure.test"]
   [:pre [:code "(deftest addition-works
  (is (= 2 (+ 1 1)))  ;; pass
  (is (= 2 (+ 1 2)))  ;; reported failure
  (testing \"Stuff after failure\"
    (is (= 5 (+ 2 3)))  ;; pass, still executed
    (is (= 2 (+ 1 5))))) ;; reported failure"]]
   [:span "JUnit"]
   [:pre [:code.java "//Some stuff to put it into a class

@Test
public void testAdditionWorks() {
    assertEquals(2, 1 + 1); //passes
    assertEquals(2, 1 + 2); //fails here
    assertEquals(5, 2 + 3); //never executed
    assertEquals(2, 1 + 5); //should fail, never executed
}"]]])

(def given-when-then
  [:section
   [:span "clojure.test"]
   [:pre [:code "(deftest life-expectancy
  (let [alice {:name \"Alice\" :occupation :chief-wormhole-inspector}
        result (life-expectancy alice)]
    (is (= 48 result))))"]]
   [:span "JUnit"]
   [:aside.notes "if instance method, could mess up JSON, might need some mocking for logic class"]
   [:pre [:code.java "//Initialize business logic class at instance-level
@Test
public void testLifeExpectancy() {
    Person bob = new Person(\"Bob\", Occupation.MUD_FIRE_SPECIALIST);
    int result = this.lifeDetectorInstance.getLifeExpectancy(bob);
    assertEquals(61, result);
}"]]])

(def normal-tests
  [:section
   [:h5 "Normal Tests"]
   simple-tests
   given-when-then
   [:section
    [:h3 "Mocking in Java?"]
    [:p "Perfectly Normal"]]
   [:section
    [:h3 "Mocking in Clojure?"]
    [:p "Usually Unnecessary"]
    [:p "Improve Project Design"]
    [:p.fragment
     [:a {:href "https://clojuredocs.org/clojure.core/with-redefs"}
      [:code "with-redefs"]]]]])

(defn all
  "Add here all slides you want to see in your presentation."
  []
  [intro
   agenda
   rambling
   unit-test-intro
   normal-tests
   data-driven-tests-slides
   interop-slides
   interop-usage-slides
   gen-test-slides
   libs-slides
   [:section {:data-transition "fade"}
    [:h1 "Questions?"]
    [:section
     [:p "Slides source will be made available here: "
      [:a {:href "https://github.com/wmatson/cw-devcon2018-clj-testing"
           :style "font-size: 32px"}
       "https://github.com/wmatson/cw-devcon2018-clj-testing"]]
     [:mini {:style "position: fixed; bottom: 10px; left: 415px"}
      "Created with " [:a {:href "https://github.com/n2o/reveal-cljs"} "reveal-cljs"]]]]])


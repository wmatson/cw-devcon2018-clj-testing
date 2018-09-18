(ns reveal.slides)

(def intro
  [:section
   [:h1 "Test Automation in Clojure"]
   [:h5 "Wesley Matson"]
   [:p "Clearwater Developer Conference 2018"]])

(def agenda
  [:section
   [:h2 "Agenda"]
   [:section
    [:p "Rambling about Clojure"]
    [:p "Unit Testing"]
    [:p "Testing Java"]
    [:p "Interesting Libraries"]]])

(def rambling
  [:section
   [:h5 "Rambling"]
   [:section
    [:h3 "Data Driven"]]
   [:section
    [:h3 "Default Immutable"]]
   [:section
    [:h3 "REPL"]]])

(def unit-testing
  [:section
   [:h5 "Unit Testing"]
   [:section
    [:h3 [:a {:href "https://clojure.github.io/clojure/clojure.test-api.html"} "clojure.test"]]
    [:pre [:code.clojure "(require '[clojure.test :refer [deftest is testing]])"]]]
   [:section
    [:pre [:code "(deftest addition-works
  (is (= 2 (+ 1 1)))  ;; pass
  (is (= 2 (+ 1 2)))  ;; reported failure
  (is (= 5 (+ 2 3)))  ;; pass, still executed
  (is (= 2 (+ 1 5)))) ;; reported failure"]]
    [:pre [:code.java "//Some stuff to put it into a class
//...
@Test
public void testAdditionWorks() {
    assertEquals(2, 1 + 1); //passes
    assertEquals(2, 1 + 1); //fails here
    assertEquals(5, 2 + 3); //never executed
    assertEquals(2, 1 + 5); //should fail, never executed
}"]]]])

(defn all
  "Add here all slides you want to see in your presentation."
  []
  [intro
   agenda
   rambling
   unit-testing])


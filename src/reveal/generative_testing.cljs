(ns reveal.generative-testing
  (:require [reveal.libs :refer [gh-lib-link]]))

(def sample-test "(deftest cart-total-test
  (let [items [{:name \"Donuts\" :cost 5}
               {:name \"Donut Holes\" :cost 4}
               {:name \"Superglue\" :cost 12.3}]]
    (is (= 21.3 (cart-total items)))))")

(def gen-test-slides
  [:section
   [:h2 "Generative Testing"]
   [:section
    [:h3 "Classic Test"]
    [:pre [:code sample-test]]]
   [:section
    [:h3 (gh-lib-link "https://github.com/clojure/test.check")]
    [:p "Generative, property-based testing"]
    [:p "Great for round-trip tests"]
    [:p "Plays nice with " [:a {:href "https://clojure.org/guides/spec#_generators"} "clojure.spec"]]]])

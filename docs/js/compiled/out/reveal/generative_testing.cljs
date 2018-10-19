(ns reveal.generative-testing
  (:require [reveal.libs :refer [gh-lib-link]]))

(def sample-test "(deftest undiscounted-cart-total-test
  (let [items [{:name \"Donuts\" :cost 5}
               {:name \"Donut Holes\" :cost 4}
               {:name \"Superglue\" :cost 12.3}]]
    (is (= 21.3 (cart-total items)))))")

(def test-check-requires
  "(require '[clojure.test.check.generators :as gen])
(require '[clojure.test.check.properties :as prop])
(require '[clojure.test.check.clojure-test :refer [defspec]]) ")

(def sum-property-test "(defspec undiscounted-cart-total 100
  (prop/for-all
   [costs (gen/vector gen/double)]
   (let [items (map #(hash-map :cost %) costs)]
     (= (cart-total items) (apply + costs)))))")

(def round-trip-test "(defspec parser-round-trip-test 100
  (prop/for-all [datum (gen/any-printable)]
   (= datum (parse (unparse datum)))))")

(def idempotency-test "(defspec sort-idempotent-test 100
  (prop/for-all [data (gen/vector gen/int)]
   (= (sort data) (sort (sort data)))))")

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
    [:p "Plays nice with " [:a {:href "https://clojure.org/guides/spec#_generators"} "clojure.spec"]]]
   [:section
    [:h3 "Property-based Test"]
    [:pre [:code test-check-requires]]
    [:pre [:code sum-property-test]]]
   [:section
    [:h4 "More Useful"]
    [:pre [:code round-trip-test]]
    [:pre [:code idempotency-test]]]
   [:section
    [:h4 "Spec"]
    [:pre [:code "(spec/def ::name string?)
(spec/def ::cost (spec/and double? pos?))
(spec/def ::item (spec/keys :req-un [::name ::cost]))
(spec/def ::items (spec/coll-of ::item))
(spec/def ::shopping-cart (spec/keys :req-un [::items]))"]]
    [:pre [:code "(defspec add-item-returns-shopping-cart 100
  (prop/for-all
   [item (spec/gen ::item)
    cart (spec/gen ::shopping-cart)]
   (spec/valid? ::shopping-cart (add-item cart item))))"]]]
   [:section
    [:h4 "fdef"]
    [:pre [:code "(spec/fdef add-item
  :args (spec/cat :cart ::shopping-cart :item ::item)
  :ret ::shopping-cart
  :fn #((set (:items (:ret %)))
        (:item (:args %))))"]]
    [:pre [:code "(spec-test/check `add-item)"]]]])

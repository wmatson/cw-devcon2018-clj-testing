(ns reveal.example.gen-testing
  (:require  [clojure.test :refer [deftest is testing]]
             [clojure.spec.alpha :as spec]
             [clojure.spec.test.alpha :as spec-test]
             [clojure.test.check :as tc]
             [clojure.test.check.generators :as gen]
             [clojure.test.check.properties :as prop]))

(spec/def ::name string?)

(spec/def ::cost (spec/and double? pos?))
(spec/def ::item (spec/keys :req-un [::name ::cost]))
(spec/def ::items (spec/coll-of ::item))

(spec/def ::shopping-cart (spec/keys :req-un [::items]))

(def empty-cart {:items [] :discounts []})

(defn add-item [cart item]
  (update cart :items conj item))

(spec/fdef add-item
           :args (spec/cat :cart ::shopping-cart :item ::item)
           :ret ::shopping-cart
           :fn #((set (:items (:ret %)))
                 (:item (:args %))))
;; (gen/generate (spec/gen ::shopping-cart))
;; (spec-test/check `add-item)

;; (spec-test/check)

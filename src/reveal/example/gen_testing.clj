(ns reveal.example.gen-testing
  (:require  [clojure.test :refer [deftest is testing]]
             [clojure.spec.alpha :as spec]
             [clojure.spec.test.alpha :as spec-test]
             [clojure.test.check :as tc]
             [clojure.test.check.generators :as gen]
             [clojure.test.check.properties :as prop]
             [clojure.test.check.clojure-test :refer [defspec]]))

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


(defn cart-total [items]
  (apply + (map :cost items)))

(defspec undiscounted-cart-total 100
  (prop/for-all
   [costs (gen/vector gen/double)]
   (let [items (map #(hash-map :cost %) costs)]
     (= (cart-total items) (apply + costs)))))

(defspec ops-return-shopping-cart 100
  (prop/for-all
   [item (spec/gen ::item)
    cart (spec/gen ::shopping-cart)]
   (spec/valid? ::shopping-cart (add-item cart item))))

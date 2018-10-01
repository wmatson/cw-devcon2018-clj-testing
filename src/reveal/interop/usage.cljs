(ns reveal.interop.usage
  (:require [reveal.data-driven-tests :as ddt]))

(def interop-usage-slides
  [:section
   [:h5 "Testing Java - Usage"]
   [:section
    [:h3 "Mocking"]
    [:ul 
     [:li "Redesign"]
     [:li [:a {:href "https://clojuredocs.org/clojure.core/reify"}
           [:code "reify"]]]
     [:li "Libraries"]]
    [:pre [:code (clojure.string/trim ddt/clj-mock)]]]
   [:section
    [:p "Data Management"]
    [:p "Clojure structures work as Java collections"]
    [:ul
     [:li "Wrapper functions/macros"]
     [:li [:a {:href "https://clojuredocs.org/clojure.core/bean"} "clojure.core/bean"]]
     [:li [:a {:href "https://github.com/clojure/java.data"} "clojure.java.data"]]
     [:li [:a {:href "https://github.com/uwcpdx/bean-dip"} "bean-dip"]]]
    [:pre {:style "font-size: 16px"}
     [:code "(import '[strangely.easy.pkg Soup Veggie])
(require '[clojure.java.data :refer [to-java]])

(deftest soup-ingredients-yummify
  (let [soup (Soup.)]
    (is (= 0 (.getYumminess soup)))
    (.addVeggies soup (map to-java [{:name \"Potato\" :typeId 3} 
                                    {:name \"Onion\" :typeId 11}]))
    (.addMeats soup [(to-java {:cut \"Shoulder\" :animal {:typeId 2 :furColor \"Brown\"}})])
    (is (= 27 (.getYumminess soup)))))"]]]])

(ns reveal.interop.usage
  (:require [reveal.interop.setup :as ris]))

(def interop-usage-slides
  [:section
   [:h5 "Testing Java - Usage"]
   [:section
    [:p "Mocking"]
    [:ul 
     [:li "Redesign"]
     [:li [:a {:href "https://clojuredocs.org/clojure.core/reify"}
           [:code "reify"]]]
     [:li [:a {:href "https://clojuredocs.org/clojure.core/with-redefs"}
           [:code "with-redefs"]]]
     [:li "Libraries"]]]
   [:section
    [:p "Data Management"]
    [:p "Clojure structures work as Java collections"]
    [:ul
     [:li "Wrapper functions/macros"]
     [:li [:a {:href "https://clojuredocs.org/clojure.core/bean"} "clojure.core/bean"]]
     [:li [:a {:href "https://github.com/clojure/java.data"} "clojure.java.data"]
      [:ul [:li "from-java & to-java"]]]
     [:li [:a {:href "https://github.com/uwcpdx/bean-dip"} "bean-dip"]]]]])
   


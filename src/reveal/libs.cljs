(ns reveal.libs)


(defn gh-lib-header [link]
  [:h3 [:a {:href link} (re-find #"(?<=/)[^/]+$" link)]])

(def libs-slides
  [:section
   [:h5 "Imagine the Possibilites"]
   [:section
    (gh-lib-header "https://github.com/clojure/test.check")
    [:p.fragment "Generative, property-based testing"]
    [:p.fragment "Great for round-trip tests"]
    [:p.fragment "Plays nice with " [:a {:href "https://clojure.org/guides/spec#_generators"} "clojure.spec"]]]
   [:section
    (gh-lib-header "https://github.com/igrishaev/etaoin")
    [:p.fragment "Like Selenium, but better"]
    [:p.fragment "Clojure wrapper around WebDrivers"]
    [:p.fragment "Well documented"]]
   [:section
    (gh-lib-header "https://github.com/reifyhealth/specmonstah")
    [:div.fragment {:style "display: flex; flex-direction: column"}
     [:img {:src "img/specmonstah_graph.png" :style "align-self: center"}]
     [:mini "Found on the Github README, MIT license"]]
    [:p.fragment "Creates test data"]
    [:p.fragment "Includes foreign key dependencies"]]])
    

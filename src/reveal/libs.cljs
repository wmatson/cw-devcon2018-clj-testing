(ns reveal.libs)

(defn gh-lib-link [link]
  [:a {:href link} (re-find #"(?<=/)[^/]+$" link)])

(def libs-slides
  [:section
   [:h5 "Imagine the Possibilites"]
   [:section
    [:h3 (gh-lib-link "https://github.com/clojure/test.check")]
    [:p.fragment "Generative, property-based testing"]
    [:p.fragment "Great for round-trip tests"]
    [:p.fragment "Plays nice with " [:a {:href "https://clojure.org/guides/spec#_generators"} "clojure.spec"]]]
   [:section
    [:h3 (gh-lib-link "https://github.com/igrishaev/etaoin")]
    [:p.fragment "Like Selenium, but better"]
    [:p.fragment "Clojure wrapper around WebDrivers"]
    [:p.fragment "Well documented"]]
   [:section
    [:h3 (gh-lib-link "https://github.com/reifyhealth/specmonstah")]
    [:div.fragment {:style "display: flex; flex-direction: column"}
     [:img {:src "img/specmonstah_graph.png" :style "align-self: center"}]
     [:mini "Found on the Github README, MIT license"]]
    [:p.fragment "Creates test data"]
    [:p.fragment "Includes foreign key dependencies"]]
   [:section
    [:h3 "Miscellaneous"]
    [:p (gh-lib-link "https://github.com/cognitect-labs/transcriptor")]
    [:p [:a {:href "https://gist.github.com/plexus/a816a942c01b0e7af1e9836205100337"} "Clojure Testing Links"]]
    [:p [:a {:href "https://www.youtube.com/watch?v=r5i_OiZw6Sw"} "Testing Stateful and Concurrent Systems (Talk)"]]
    [:p [:a {:href "https://www.reddit.com/r/Clojure/"} "Clojure Subreddit"]]]])

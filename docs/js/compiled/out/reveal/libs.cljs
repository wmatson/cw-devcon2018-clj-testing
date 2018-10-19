(ns reveal.libs)

(defn gh-lib-link [link]
  [:a {:href link} (re-find #"(?<=/)[^/]+$" link)])

(def libs-slides
  [:section
   [:h5 "Imagine the Possibilites"]
   [:section
    [:h3 "Libraries"]
    [:p (gh-lib-link "https://github.com/cognitect-labs/transcriptor")]
    [:p (gh-lib-link "https://github.com/igrishaev/etaoin")]
    [:p (gh-lib-link "https://github.com/reifyhealth/specmonstah")]]
   [:section
    [:h3 "Links"]
    [:p [:a {:href "https://gist.github.com/plexus/a816a942c01b0e7af1e9836205100337"} "Clojure Testing Links"]]
    [:p [:a {:href "https://www.youtube.com/watch?v=r5i_OiZw6Sw"} "Testing Stateful and Concurrent Systems (Talk)"]]
    [:p [:a {:href "https://www.reddit.com/r/Clojure/"} "Clojure Subreddit"]]]])

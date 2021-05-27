(ns canastref.drop-file-stream 
  (:require #_[re-frame.core :as rf]
            [day8.re-frame.http-fx] 
            [ajax.core :refer [text-response-format json-request-format
                               json-response-format]]
            ))

(defn ajax-request-delete-file-from-dropbox
  [filename db-key]
  (let [path (str "/" filename)]
    {:method          :post
     :uri             "https://api.dropboxapi.com/2/files/delete"
     :with-credentials? false
     :headers
     {"Authorization"
      "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"}
     :format (json-request-format)
     :params {:path path}
     :response-format (json-response-format {:keywords? true})
     :on-success      [:process-deleted db-key]
     :on-failure      [:bad-resp db-key]}))

(defn ajax-request-file-exists-on-dropbox
  [filename db-key]
  (let [path (str "/" filename)]
    {:method          :post
     :uri             "https://api.dropboxapi.com/2/files/get_metadata"
     :with-credentials? false
     :headers
     {"Authorization"
      "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
      "Content-Type" "text/plain; charset=utf-8"}
     :format (json-request-format)
     :params {:path path}
     :response-format (json-response-format {:keywords? true})
     :on-success      [:process-exists db-key]
     :on-failure      [:bad-resp db-key]}))

(defn ajax-request-read-edn-from-dropbox
  [filename db-key]
  (let [path (str "{\"path\":\"/" filename "\"}")]
    {:method          :post
     :uri             "https://content.dropboxapi.com/2/files/download"
     :with-credentials? false
     :headers
     {"Authorization"
      "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
      "Dropbox-API-Arg" path
      "Content-Type" "text/plain; charset=utf-8"}
     :response-format  (text-response-format)
     :on-success      [:process-resp db-key]
     :on-failure      [:bad-resp db-key]
     :body ""}))

(defn ajax-request-write-edn-to-dropbox
  [content filename db-key]
  (let [path
        (str "{\"path\":\"/" filename \" "," "\"mode\":{\".tag\":\"overwrite\"}}")]
    {:method          :post
     :uri             "https://content.dropboxapi.com/2/files/upload"
     :with-credentials? false
     :headers
     {"Authorization"
      "Bearer QfCCKhxI-HwAAAAAAAAGe4i9DNbnHKnffOh6gCeyFIKFvRqMbS7IW1JQzyb8XVNp"
      "Dropbox-API-Arg" path
      "Content-Type" "application/octet-stream"}
     :response-format  (text-response-format)
     :on-success      [:process-written db-key]
     :on-failure      [:bad-resp db-key]
     :body content}))

